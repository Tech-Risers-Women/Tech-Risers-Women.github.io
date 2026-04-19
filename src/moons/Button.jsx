import styles from './button.module.css';

const Button = ({
	children,
	onClick,
	variant = 'primary',
	type = 'button',
	className = ''
}) => {
	const baseClass =
		variant === 'secondary'
			? `${styles.button} ${styles.secondary}`
			: styles.button;

	const combinedClass = `${baseClass} ${className}`;

	return (
		<button type={type} onClick={onClick} className={combinedClass}>
			{children}
		</button>
	);
};

export default Button;
