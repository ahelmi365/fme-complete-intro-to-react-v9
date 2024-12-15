import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import useCurrencyINTL from "./useCurrencyINTL";
import getPastOrders from "./api/getPastOrders";
import getPastOrder from "./api/getPastOrder";
import Modal from "./Modal";

const PastOrders = () => {
  // throw new Error("Error from past orders!");
  const [page, setPage] = useState(1);
  const [focusedOrder, setFocusedOrder] = useState(null);
  const currencyINTL = useCurrencyINTL();

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  });

  const {
    isLoading: isLoadingOrder,
    error: errorOrder,
    data: pastOrderData,
    isError: isErrorOrder,
  } = useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 24 * 60 * 60 * 1000,
    enabled: !!focusedOrder,
  });

  if (isLoading) {
    return (
      <div className="past-orders">
        <h2>LOADING...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="past-orders">
        <h2>Error... {error.message}</h2>
      </div>
    );
  }
  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <tr key={order.order_id}>
              <td>
                <button
                  type="button"
                  onClick={() => setFocusedOrder(order.order_id)}
                >
                  {order.order_id}
                </button>
              </td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

      {focusedOrder && (
        <Modal>
          <>
            <h2>Order #{focusedOrder}</h2>

            {isLoadingOrder && <p>Loading</p>}
            {pastOrderData && (
              <table>
                <thead>
                  <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Size</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  {pastOrderData.orderItems.map((pizza) => (
                    <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                      <td>
                        <img src={pizza.image} alt={pizza.name} />
                      </td>
                      <td>{pizza.name}</td>
                      <td>{pizza.size}</td>
                      <td>{pizza.quantity}</td>
                      <td>{currencyINTL.format(pizza.price)}</td>
                      <td>{currencyINTL.format(pizza.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isErrorOrder && <p>{errorOrder.message}</p>}

            <button type="button" onClick={() => setFocusedOrder(null)}>
              Close
            </button>
          </>
        </Modal>
      )}
    </div>
  );
};

export default PastOrders;
