export default function ({ from, route, redirect }) {
  const langPrefix = '/ru';

  const fromHasLangPrefix = from.path.startsWith(langPrefix);

  // Проверяем, содержит ли текущий маршрут языковый префикс
  const routeHasLangPrefix = route.path.startsWith(langPrefix);


  if (!fromHasLangPrefix && routeHasLangPrefix) {
    // Сохраняем полный путь текущего маршрута
    const fullPath = route.fullPath;

    // Добавляем языковый префикс к полному пути текущего маршрута
    const newFullPath = langPrefix + fullPath;

    // Выполняем перенаправление на новый маршрут
    console.log('rurururu - ',newFullPath)
    // redirect(newFullPath);
  }

}
