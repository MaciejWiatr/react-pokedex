import useDarkMode from "use-dark-mode";

export const DarkModeToggle = () => {
	const darkMode = useDarkMode(false);

	return (
		<div>
			<input
				type={"checkbox"}
				checked={darkMode.value}
				onChange={darkMode.toggle}
			/>
			Dark mode
		</div>
	);
};
