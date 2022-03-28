import s from "./BaseLayout.module.scss";

export const BaseLayout = ({ children }) => {
	return <main className={s.layoutContainer}>{children}</main>;
};
