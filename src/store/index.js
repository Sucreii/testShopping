import axios from "axios";

// import { useState } from "react";

// const [countData, setCount] = useState([]);

export const getCount = async () => {
  try {
    const cartCounts = await axios.get(
      `${import.meta.env.VITE_PRODUCTS_URL}/carts`
    );
    console.log(`Get all card ID: `, cartCounts.data);

    // setCount(cartCounts.data);
  } catch (err) {
    console.log(`Error on Carts`, err);
  }
}
