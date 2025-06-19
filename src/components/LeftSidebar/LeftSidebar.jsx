import React, { useState } from 'react';
import allCatalogItems from '../../data/package_sidebar_list.json';

const LeftSidebar = () => {
	const [openIndex, setOpenIndex] = useState(null); // Хранит индекс открытого пункта меню

	const handleItemClick = (index) => {
		// Если кликнули на уже открытый пункт, закрываем его, иначе открываем новый
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<ul className="catalog__list">
			{allCatalogItems.map((item, index) => (
				<li
					key={index}
					data-catalog-list
					className={openIndex === index ? 'open' : ''}
					onClick={() => handleItemClick(index)}
				>
					{item.submenu.length > 0 ? (
						// Предотвращаем переход по ссылке
						<a href="#"	onClick={(e) => e.preventDefault()} >
							{item.menu}
						</a>
					) :
						// Для пунктов без подменю рендерим просто текст
						(	item.menu	)
					}

					{item.submenu.length > 0 && (
						<ul
							className={`catalog__sublist ${openIndex === index ? '' : 'hide_list'}`}

						>
							{item.submenu.map((subItem, subIndex) => (
								<li key={subIndex}>
									<a href="#" onClick={(e) => e.preventDefault()}>
										{subItem.sub}
									</a>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	);
};

export default LeftSidebar;