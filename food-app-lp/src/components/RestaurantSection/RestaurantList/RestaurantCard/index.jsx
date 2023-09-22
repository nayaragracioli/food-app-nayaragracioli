import styles from "./style.module.css";

export const RestaurantCard = ({ restaurant }) => {
    return(
        <li className={styles.restaurantCard}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3 className="title white sm">{restaurant.name}</h3>
            <p className="paragraph white">{restaurant.description}</p>
        </li>
    )
}