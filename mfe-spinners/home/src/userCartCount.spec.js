import { renderHook, act } from "@testing-library/react";

import { useCartCount } from "./useCartCount";

let callback = () => {};

jest.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: (cb) => {
      callback = cb;
    },
  },
}));

describe("useCartCount", () => {
  it("should return cart count with 0", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });

  it("should return cart count with 1", () => {
    const { result } = renderHook(() => useCartCount());
    act(() => {
      callback({ cartItems: [{ id: 1 }] });
    });
    expect(result.current).toBe(1);
  });
});
