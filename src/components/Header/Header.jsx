import style from "./header.module.scss";

export default function Header({ minutes, seconds, attension }) {
    return (
        <header className={style.header}>
            <div className={"inline-flex items-center justify-center relative"}>
                Скидка действует :  
                <p style={{ color: attension === "orange" ? "#F97316" : "#01B9C5" }}>
                    {`${minutes.toString().padStart(2, "0")}:${seconds.toString()
                        .padStart(2, "0")}`}
                    <span className={"absolute right-[22%] top-[70%]"}>минут</span>
                    <span className={"absolute right-[2%] top-[70%]"}>секунд</span>
                </p>
            </div>
        </header>
    );
}