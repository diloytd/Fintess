import "./card.scss";
import "./Main/main.scss";

export default function CardItem({ item, price, index, className, over, discount }) {
    return (
        <>
            {!over ? (
                <div className={className}>
                    <span className={"card_star"}>{discount[index]}</span>
                    <p className={"name"}>{item.name}</p>
                    <div className={"price"}>
                        <p className={"price"}>{item.price}₽</p>
                        <p className={"FullPrice"}>{price}</p>
                    </div>
                    <p className={"slogan"}>{item.slogan}</p>
                </div>
            ) : (
                <div className={className}>
                     
                    <p className={"name"}>{item.name}</p>
                    <div className={"price"}>
                        <p className={"price"}>{price}₽</p>
                    </div>
                    <p className={"slogan"}>{item.slogan}</p>
                </div>
            )}
        </>
    );
}
