export const SITE_NAME = 'Джили Партнер'; // Название сайта по умолчанию
export const LEGAL_ENTITY = 'ООО "ПАРТНЕР"'; // Юр лицо
export const LEGAL_INN = '5610229506'; // ИНН
export const SITE_DESCR = 'Официальный дилерский центр Geely в Оренбурге'; // Описание сайта по умолчанию

export const BRAND = 'Geely';

export const LINKS_MENU = [
	{url: '#services', name: 'Услуги сервиса'},
	{url: '#contacts', name: 'Контакты'},
];


import {getPages} from '@/js/pages';
export const PAGES = await getPages();

export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона <a href="tel:+7 (3532) 40-53-53">+7 (3532) 40-53-53</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
