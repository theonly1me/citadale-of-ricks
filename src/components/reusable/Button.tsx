const Button: React.FC<{ classes: any; buttonText: string }> = ({ classes, buttonText }) => {
	return (
		<a href="#content" className={classes.button}>
			{buttonText}
		</a>
	);
};

export default Button;
