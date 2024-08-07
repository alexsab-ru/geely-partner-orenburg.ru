import { phoneFormat } from '@/js/utils/numbers.format';
// Название сайта по умолчанию
export const SITE_NAME = 'Джили Партнер';
// Юр лицо
export const LEGAL_ENTITY = 'ООО "ПАРТНЕР"';
// ИНН
export const LEGAL_INN = '5609202210';
// Город
export const LEGAL_CITY = 'г. Оренбург';
// где? в Городе
export const LEGAL_CITY_WHERE = 'Оренбурге';
// Описание сайта по умолчанию
export const SITE_DESCR = 'Официальный дилерский центр Geely в Оренбурге';
// Имя пользователя в Телегам
export const TELEGRAM = 'geely_partner_orenburg';
// Телефон по умолчанию
export const PHONE = '+7 (3532) 40-53-53';
// Бренд
export const BRAND = 'Geely';
// Конечное время для таймера
//string 2024-04-26 or 2024-04-26 23:59:59 or December 31 2015 or December 31 2015 23:59:59 GMT+02:00
export const TIMER_ENDTIME = '';
// Объект для бегущей строки
export const MARQUEE = {title: 'Тотальная распродажа до', dateTo: '31.08.2024', count: [1,2,3,4,5,6,7,8], show: false };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';
// Ссылка организации для виджета
export const LINK_WIDGET_ORGNIZATION = 'CDV3QI7y';
// Ссылки под хедером
export const LINKS_MENU = [
	{url: 'cars/', name: 'Авто в наличии'},
	{url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	// {url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline" target="_blank">обработку персональных данных</a>';
// Текст информации в футере
export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона <a class="whitespace-nowrap" href="tel:' + phoneFormat(PHONE) + '">' + PHONE + '</a>. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
