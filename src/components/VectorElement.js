// MODULES //

// STYLES //
import styles from "@/styles/components/VectorElement.module.scss";

// COMPONENTS //
import Image from "next/image";

// PLUGINS //

// IMAGES //
import Square from "@/public/img/icons/square.svg";
import SemiCircle from "@/public/img/icons/semi-circle.svg";
import Triangle from "@/public/img/icons/triangle.svg";
import Donut from "@/public/img/icons/donut.svg";

export default function VectorElement() {
  return (
    <>
      <div className={`${styles.square} ${styles.vector}`}>
        <Image src={Square} alt="Square" />
      </div>
      <div className={`${styles.semi_circle} ${styles.vector}`}>
        <Image src={SemiCircle} alt="Square" />
      </div>
      <div className={` ${styles.scale_circle} ${styles.vector}`}></div>
      <div className={`${styles.circle} ${styles.vector}`}></div>
      <div className={`${styles.triangle} ${styles.vector}`}>
        <Image src={Triangle} alt="Square" />
      </div>
      <div className={`${styles.donut} ${styles.vector}`}>
        <Image src={Donut} alt="Square" />
      </div>
    </>
  );
}
