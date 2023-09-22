import { restaurants } from "../../../data/restaurant"
import { RestaurantCard } from "./RestaurantCard"
import styles from "./style.module.css";

export const RestaurantList = () => {
    return(
        <ul className={styles.restaurantList}>
            {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}            
        </ul>
    )
}