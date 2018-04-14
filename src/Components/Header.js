import React from "react";
import AppBar from "material-ui/AppBar";
class Header extends React.Component {
    render() {
        const style_for_head = {
            textAlign : 'center'
        }
        return (
            <AppBar
                title="Todo Application"
                showMenuIconButton={false}
                style = {style_for_head}
            />
        );
    };
}
export default Header;
