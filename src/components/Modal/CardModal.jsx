import { useState } from "react";
import style from "./modal.module.scss";
import Discount from "../../assets/Discount.png";
export default function CardModal({ item, index, price, discount }) {
    const [chooseItem, setChooseItem] = useState({
        [index]: false,
    });

    function handleChangeState() {
        setChooseItem((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    }
    return (
        <div className={chooseItem[index] ? "bg-[#e9f4f4] w-[13rem] h-[12rem] pl-[26px] pt-[15px]" : "bg-white w-[13rem] h-[12rem] pl-[26px] pt-[15px]"}>
            <div className={"flex flex-row justify-between"}>
                <span className={"text-2xl font-Bebas"}>{item.name}</span>
                <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    className={style.item}
                    hidden
                    onClick={() => handleChangeState()}
                />
                <label htmlFor={item.id} className={style.radio}></label>
            </div>
            <div>
                <span className={style.card_oldPrice}>{price[index]}</span>
            </div>
            <div className={"text-5xl mt-[3rem] flex justify-around w-[100%]"}>
                <span>{item.price}₽</span>
                <span className={style.card_star}>{discount[index]}</span>
            </div>
        </div>
    );
}

//"w-[13rem] h-[12rem] pl-[26px] pt-[15px]"
