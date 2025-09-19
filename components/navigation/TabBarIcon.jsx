// veja os icones disponíveis em: https://icons.expo.fyi/

import IonIcons from '@expo/vector-icons/IonIcons';

export function TabBarIcon({ style, ...rest }) {
    return <IonIcons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}