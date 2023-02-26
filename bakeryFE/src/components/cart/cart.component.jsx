import './cart.component.scss';
import CartItem from "../cartItem/cartItem.component";
import { useState } from "react";
import { BsCartCheck, BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = (props) => {
  let [cartOpen, setCartOpen] = useState(false);

  const showCartItems = (props) => {
    let total = 0;

    const itemsInCart = props.orders.map((item) => (
      <CartItem
        key={item.id}
        onDelete={props.onDelete}
        id={item.id}
        title={item.title}
        photo={item.photo}
        price={item.price}
        count={item.count}
      />
      
    ));

    props.orders.forEach((item) => (total += item.price * item.count));
    

    return (
      <div className="full-Cart">
        <div className="orderId">Замовлення №{props.orderId}</div>
        {itemsInCart}
        <div className="total-price">
          Всього: <span>{total}</span> грн.
        </div>
        <div className="checkout-btn">
          <Link to={`checkout/?id=${props.orderId}`}>
            Оформити замовлення
          </Link>
        </div>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <p>Немає товарів</p>
      </div>
    );
  };

  const openCart = () => {
    setCartOpen((cartOpen = !cartOpen));
  };

  return (
    <>
      {props.orders.length > 0 ? (
        <BsCartCheck
          onClick={openCart}
          className={`cart ${cartOpen && "active-cart"}`}
        />
      ) : (
        <BsCartDash
          onClick={openCart}
          className={`cart ${cartOpen && "active-cart"}`}
        />
      )}
        {cartOpen && (
          <div className="cart-popup">
            {props.orders.length > 0
              ? showCartItems(props)
              : showNothing()}
          </div>
        )}
    </>
  );
};

export default Cart;

