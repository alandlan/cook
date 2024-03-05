import { StyleSheet} from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
    },
    title:{
        fontSize: theme.fonts.size.heading.xl,
        lineHeight: 44,
        marginTop: 42,
        fontFamily: theme.fonts.family.bold,
    },
    subTitle:{
        fontFamily: theme.fonts.family.regular,
    },
    message: {
        fontSize: theme.fonts.size.body.md,
        marginBottom: 38,
        marginTop: 12,
        color: theme.colors.gray_400,
        fontFamily: theme.fonts.family.regular,
    },
    ingredients: {
        flexWrap: "wrap",
        flexDirection: "row",
        paddingBottom: 200,
        gap: 12,
    },
});