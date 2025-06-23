import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

export const Container = styled(ImageBackground).attrs({
    source: require('../assets/bg3.jpg')
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5; 
`;

export const Input = styled.TextInput`
    border-width: 1px;
    border-color: #cccccc; 
    border-radius: 8px;
    padding: 10px;
    margin-vertical: 10px;
    width: 75%;
    color: #000; 
    background-color: #ffffff;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #4a90e2; 
    border-radius: 50px;
    padding: 12px;
    width: 80%;
    align-items: center;
    margin: 5px;
    text-align: center; 
`;

export const ButtonText = styled.Text`
    color: #ffffff; 
    font-weight: bold;
    text-align: center; 
`;

export const Form = styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: #cccccc; 
    width: 90%;
    justify-content: center;
    align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #4a90e2;
    border-radius: 50px;
    padding: 10px;
    width: 12%;
    align-items: center;
    margin: 10px;
    justify-content: center;
`;

export const List = styled.FlatList`
    width: 100%;
`;

export const Card = styled.View`
    align-items: center;
    margin: 15px 20px;
    background: #ffffff;
    opacity: 0.95;
    padding: 20px;
    border-radius: 20px;
`;

export const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #e0e0e0; 
`;

export const CardInfos = styled.View`
    margin-top: 10px;
    width: 100%;
    align-items: flex-start;
    padding-left: 20px;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    margin-top: 2px;
    text-transform: none;
`;

export const Status = styled.Text`
    font-size: 14px;
    color: #4a90e2;
`;

export const LabelText = styled.Text`
    font-size: 14px;
    color: #666666;
    font-weight: bold;
`;

export const InfoText = styled.Text`
    font-size: 14px;
    color: #4a90e2;
`;

export const CardButtons = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`;

export const CardButton = styled(RectButton)`
    margin-top: 10px;
    background: #4a90e2;
    width: 45%;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 8px;
`;

export const CardButtonText = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    text-transform: none;
`;
