const getPastOrder = async (order) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`/api/past-order/${order}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
  }
};

export default getPastOrder;
