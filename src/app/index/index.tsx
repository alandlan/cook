import { Alert, ScrollView, Text, View } from "react-native";

import {styles} from "./styles";
import { Ingredient } from "@/components/ingredient";
import { useEffect, useState } from "react";
import { Selected } from "@/components/selected";
import { router } from "expo-router";
import { services } from "@/services";

export default function Index() {

    const [selected, setSelected] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

    function handleToggleSelect(name: string){
        if(selected.includes(name)){
            setSelected(selected.filter(item => item !== name));
        }else{
            setSelected((state) => [...state, name]);
        }
        console.log(selected);
    }

    function handleClear(){
        setSelected([]);
        // Alert.alert(
        //     "Limpar seleção", 
        //     "Deseja limpar a seleção de ingredientes?", 
        //     [
        //         {
        //             text: "Não",
        //             style: "cancel"
        //         },
        //         {
        //             text: "Sim",
        //             onPress: () => setSelected([])
        //         }
        //     ]
        // );
    }

    function handleSearch(){
        router.navigate("/recipes/"+selected);
    }

    useEffect(() => {
        services.ingredients.findAll().then((response) => {
            setIngredients(response.data ?? [])
        }
            
        ).catch((error) => {console.log(error)});
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha {"\n"}
                <Text style={styles.subTitle}>
                    os produtos
                </Text>
            </Text>
            <Text style={styles.message}>Descubra receitas baseadas nos produtos que voce escolheu.</Text>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ingredients}>
                
                
                {ingredients.map((item) => (
                    <Ingredient     key={item.id} 
                                    name={item.name} 
                                    image={`${services.storage.imagePaths}/${item.image}`} 
                                    selected={selected.includes(item.id)} 
                                    onPress={()=> handleToggleSelect(item.id)} />
                ))}
            </ScrollView>

            {selected.length > 0 && (
                <Selected quantity={selected.length} onClear={handleClear} onSearch={handleSearch} />
            )}

        </View>
    );
}