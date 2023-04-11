import React, { useCallback, useEffect, useState } from "react";
import "./education.scss";
import { getCollection } from '../../appwrite';


const Education = () => {
	const [studies, setStudies] = useState([])
	const getStudies = useCallback(async () => {
		const id = process.env.REACT_APP_STUDY ?? null
		if (id) {
			const data = await getCollection(id)
			if ('documents' in data && data.documents.length > 0) {
				setStudies([...data.documents.reverse()])
			}
		}
	}, [])

	useEffect(() => {
		getStudies()
	}, [getStudies])

	return (
		<div className="Education content-item">
			<h3>EDUCATION</h3>
			<div className="Education__content">
				{
					studies.map((study) => (
						<React.Fragment key={study.$id}>
							<div className="year">
								<strong>{study.year}</strong>
							</div>
							<div className="description">
								<p>{study.name}</p>
								<strong>{study.entity}</strong>
								<br />
								<small>
									{study.description}
								</small>
							</div>
						</React.Fragment>
					))
				}
			</div>
		</div>
	);
};

export default Education;
