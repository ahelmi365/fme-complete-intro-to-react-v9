import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import getPastOrders from "./api/getPastOrders";
import Modal from "./Modal";

const PastOrders = () => {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const { isLoading, error, data, isError } = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  });
  console.log({ isError, error });
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
                <button type="button" onClick={() => setShowModal(true)}>
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

      {showModal && (
        <Modal>
          <>
            hello from modal
            <button type="button" onClick={() => setShowModal(false)}>
              Close Modal
            </button>
          </>
        </Modal>
      )}
    </div>
  );
};

export default PastOrders;
