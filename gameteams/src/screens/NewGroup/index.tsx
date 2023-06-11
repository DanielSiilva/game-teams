import {useNavigation} from '@react-navigation/native'

import { 
  Container, 
  Content,
  Icon
} from "./styles";

import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";


export function NewGroup(){
  const navigation = useNavigation()
  
  function handleNew(){
    navigation.navigate('players', {group: 'Estudo'})
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da Turma"
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}