import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "/home/SarikAnwar/Downloads/foodwebsite/foodwebsite/src/assets/meals.jpg";
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="Table full of meals" />
            </div>
        </Fragment>

    );
};
export default Header;