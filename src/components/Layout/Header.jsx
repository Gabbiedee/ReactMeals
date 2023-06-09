import classes from "./Header.module.css";
import mealsImages from "../../assets/meals.jpeg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
return <>
<header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton onShowCart={props.onShowCart}/>
</header>
<div className={classes["main-image"]} >
    <img src={mealsImages} alt="A table full of delicious food!"/>
</div>
</>
};

export default Header;