[Декомпозиция](https://wee-owl.github.io/ra-compo-decompo/)
===
[![Build status](https://ci.appveyor.com/api/projects/status/vo4dmxgq5u0a6ee0?svg=true)](https://ci.appveyor.com/project/wee-owl/ra-compo-decompo)

Имеется дизайн-макет, похожий на этот:

![](./src/assets/decomposition.png)

Необходимо разбить весь интерфейс на компоненты и в файле каждого компонента указать буквально одну строку комментария, за что данный компонент отвечает.  
Можно использовать формат [JSDoc](https://react-styleguidist.js.org/docs/documenting/).  
Повторяющиеся компоненты рекомендуется сделать настраемыми за счёт `props` (у каждой новости в списке новостей есть иконка, текст и ссылка).
