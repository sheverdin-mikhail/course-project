export const ThemeDecorator = (props: any) => {
    const { children, themeName } = props;

    return (
        <div id="app" className={`app ${themeName}`}>
            { children }
        </div>
    );
};
