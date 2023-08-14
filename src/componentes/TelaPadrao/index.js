import { SafeAreaView,StatusBar, KeyboardAvoidingView } from "react-native";
import estilosGlobal from '../../styles'
export default function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={estilosGlobal.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
