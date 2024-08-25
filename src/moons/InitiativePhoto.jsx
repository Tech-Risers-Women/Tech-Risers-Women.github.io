import styles from "./initiativePhoto.module.css";

function InitiativePhoto(props) {
  const { src, alt } = props;
  return (
    <div>
      <img className={styles.initiativePhoto} src={src} alt={alt} />
    </div>
  );
}

export default InitiativePhoto;
