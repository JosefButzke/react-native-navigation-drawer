import styled from 'styled-components';

import { Platform } from 'react-native';

export const Container = styled.SafeAreaView `
    flex: 1;
    padding-top: ${Platform.OS === "android" ? '22px' : 0}
`;
