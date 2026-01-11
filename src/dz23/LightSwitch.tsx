import { useState } from "react";

export const LightSwitch = () => {
  const { isOn, toggle } = useToogle();
  return (
    <div>
      <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
      <button onClick={toggle}>Переключить свет</button>
    </div>
  );
};

export const TogglePage = () => {
  return (
    <div>
      {/*<LightSwitch />*/}
      {/*<VisibilityToggle />*/}
      {/*<NotificationSwitch />*/}
      <TitleEditor />
    </div>
  );
};

export const VisibilityToggle = () => {
  const { isOn, setIsOn } = useToogle();
  return (
    <div>
      <h1>Секретное сообщение</h1>
      {isOn && <h2>🎉 Это секретное сообщение!</h2>}
      <button
        onClick={() => {
          setIsOn(true);
        }}
      >
        Показать
      </button>
      <button
        onClick={() => {
          setIsOn(false);
        }}
      >
        Скрыть
      </button>
    </div>
  );
};
export const NotificationSwitch = () => {
  const { isOn, toggle, setIsOn, reset } = useToogle();

  return (
    <div>
      <h2>Настройки уведомлений</h2>
      {isOn && <div>🔔 Уведомления включены</div>}
      {!isOn && <div>🔕 Уведомления выключены</div>}
      <button onClick={toggle}>Переключить</button>
      <button onClick={() => setIsOn(true)}>включить</button>
      <button onClick={reset}>Сбросить по умолчанию</button>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToogle = () => {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => {
    setIsOn(!isOn);
  };
  const reset = () => {
    setIsOn(false);
  };
  return { isOn, toggle, setIsOn, reset };
};
export const TitleEditor = () => {
  const { text, setText, clear, toUpper, toLower } = useText("it-incubator");

  return (
    <div>
      <h1>Итоговый результат 🚀</h1>
      <h2>{text || "Пусто"}</h2>
      <button onClick={toUpper}>Верхний регистр</button>
      <button onClick={toLower}>Нижний регистр</button>
      <button
        onClick={() => {
          setText("Новый заголовок");
        }}
      >
        Измениь на новый заголовок
      </button>
      <button onClick={clear}>Очистить</button>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useText = (initialText: string) => {
  const [text, setText] = useState(initialText);
  const clear = () => {
    setText("");
  };
  const toUpper = () => {
    setText(text.toUpperCase());
  };
  const toLower = () => {
    setText(text.toLowerCase());
  };
  return { text, setText, clear, toUpper, toLower };
};
