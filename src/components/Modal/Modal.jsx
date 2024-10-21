import data from "../../data.json"
import CardModal from "./CardModal";
import style from "./modal.module.scss"
export default function Modal({closeModal}){
    const discountArray = ["-40%", "-50%", "-60%"];
    const discount = discountArray.map((item) => item);
    const price = data.slice(4, 8).map((item) => item.price);
    return (
        <>
            <div className={style.backWindow}>
                <div className={style.modal}>
                    <div className={"flex flex-row justify-between"}>
                        <p className={"bg-blue"}>горящее предложение</p>
                        <button onClick={closeModal}>&times;</button>
                    </div>
                    <h2
                        className={
                            "text-3xl text-center mt-[30px] font-bold font-Rubik"
                        }
                    >
                        Не упусти свой{" "}
                        <span className={"text-blue"}>последний шанс</span>
                    </h2>
                    <p className={"text-2xl text-center mt-[30px] font-Rubik"}>
                        Мы знаем, как трудно начать.. Поэтому!
                    </p>
                    <div
                        className={
                            "border-2 border-blue rounded-[30px] p-[12px] text-center mt-[15px] mb-[40px]"
                        }
                    >
                        Дарим скидку для лёгкого старта 🏃‍♂️
                    </div>
                    <p className={"mb-[27px]"}>
                        Посмотри, что мы для тебя приготовили 🔥
                    </p>
                    <div className={style.wrapCard}>
                        {data.slice(8, 11).map((item, index) => (
                            <CardModal
                                item={item}
                                index={index}
                                price={price}
                                discount={discount}
                                key={item.id}
                            />
                        ))}
                    </div>
                    <div
                        className={
                            "w-[100%] flex justify-center items-center mt-[20px] mb-[20px]"
                        }
                    >
                        <button
                            className={
                                "w-[19rem] h-[3rem] rounded-[30px] bg-orange "
                            }
                        >
                            Начать тренироваться
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}