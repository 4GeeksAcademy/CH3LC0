import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>HOME PARTE DE ARRIBA</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="text-center mt-5">
			<h1>HOME PARTE DEL CENTRO</h1>
			</div>
			<p>
				HOME PARTE BAJA
			</p>
		</div>
	);
};
