import { Text, View } from "react-native";
import Animated, { BounceInDown, BounceOutUp, SlideInDown, SlideOutDown } from "react-native-reanimated";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Button } from "../button";

type SelectedProps = {
    quantity: number;
    onClear: () => void;
    onSearch: () => void;
}

export function Selected({quantity, onClear, onSearch}: SelectedProps){
    return (
        <Animated.View style={styles.container} entering={SlideInDown} exiting={BounceOutUp}>
            <View style={styles.header}>
                <Text style={styles.label}>{quantity} ingredientes selectionados</Text>
                <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400} />
            </View>
            <Button title="Buscar receitas" onPress={onSearch} />
        </Animated.View>
    )

}