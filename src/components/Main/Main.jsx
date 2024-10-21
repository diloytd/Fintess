import data from "../../data.json";
import img from "../../assets/Img.png";
import "./main.scss";
import CardItem from "../Card";

export default function Main({ over }) {
    const discountArray = ["-30%", "-40%", "-50%", "-70%"];
    const discount = discountArray.map((item) => item)
    const price = data.slice(4, 8).map((item) => item.price);
    return (
        <>
            <div className={" w-vw min-h-[100vh] bg-grey pt-[27px] flex flex-col wrap"}>
                <h1 className={"mb-10 flex items-center justify-center title"}>
                    Выбери подходящий тарифный план
                </h1>
                <div className={"content"}>
                    <img src={img} alt={"model"} className={"max-w-[50%] main_img" } />
                    <div className={"w-[50%] discount"}>
                        {data.map((item, index) => {
                            if (index > 3) {
                                return null;
                            } else {
                                return (
                                    <div key={item.id}>
                                        <CardItem
                                        discount={discount}
                                            over={over}
                                            item={item}
                                            index={index}
                                            price={price[index]}
                                            className={
                                                index === 3
                                                    ? "cardLast"
                                                    : "card"
                                            }
                                        />
                                    </div>
                                );
                            }
                        })}
                         <div>
               <p className={"content_item "}> Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
               <div>
                <input type="checkbox" value={"yes"} id={"checkbox2"}className={"checkbox"}/>
                <label className={"checkbox-label"} htmlFor="checkbox2"></label>
                <span className={"span"}>Я соглашаюсь с <a href="#" className={'text-cyan-500'}>Правилами сервиса</a>  и  условиями <a href="#" className={'text-cyan-500'}>Публичной оферты</a>. </span>
               </div>
               <button type="submit" className={"button"}>Купить </button>
               <p className={"agreed"}>Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.</p>
               </div>
                    </div>
                   
                </div>
              
            </div>
            
        </>
    );
}
