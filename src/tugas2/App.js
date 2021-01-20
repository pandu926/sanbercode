import React, {Component} from 'react';
import {Text, View , Image, StatusBar} from 'react-native';
// import Hooks from './tugas2/hooks';

const App = () => {
  return (
    <View style={{ backgroundColor: '#e0e0e0' }}>
      <StatusBar 
      backgroundColor= "blue"
      />
      <View style={{ backgroundColor: 'blue', height: 90 }}>
        <Text style={{ color: 'white', zIndex: 99, position: 'relative', fontSize: 30, top: 40, left:30 }}>
        Account
        </Text>
      </View>
      
      <View>
        <Profil/>
        <Dompet />
        <Pengaturan />
        <Bantuan />
        <Syarat />
        <Keluar/>
      </View>
    </View>
    
  );
}

const Profil = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', position: 'relative', top: 5,paddingBottom:20  }}>
      <Image
        source={{ uri: 'https://blog.sanbercode.com/wp-content/uploads/2020/10/Screenshot_1603953103-498x1024.png' }}
        style={{ height: 50, width: 50, marginLeft: 30, marginTop:30, borderRadius: 30 }}
      />
      <Text  style={{  fontSize:23, marginLeft: 30, marginTop:40, borderRadius: 30, fontWeight: 'bold' }}> Ahmad Pandu Subekti</Text>
    </View>
  );
}

const Dompet = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', position: 'relative', top: 10,paddingBottom:20, justifyContent: 'space-between', marginBottom: 3  }}>
      <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/gambling-15/48/24-512.png' }}
        style={{ height: 30, width: 30, marginLeft: 30, marginTop:20 }}
      />
        <Text style={{  fontSize:18, marginLeft: 18, marginTop:28,  }}> Saldo </Text>
      </View>
      
      <Text  style={{  fontSize:18, marginRight: 30, marginTop:30,  }}>Rp. 120.000.000</Text>
    </View>
  );
    
  
}
const Pengaturan = () => {
  
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', position: 'relative', top: 10,paddingBottom:20,  marginBottom: 3 }}>
    <Image
      source={{ uri: 'https://cdn4.iconfinder.com/data/icons/gambling-15/48/24-512.png' }}
      style={{ height: 30, width: 30, marginLeft: 30, marginTop:20 }}
    />
      <Text style={{  fontSize:18, marginLeft: 18, marginTop:28,  }}> Pengaturan </Text>
    </View>
  );

}

const Bantuan = () => {
  
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', position: 'relative', top: 10,paddingBottom:20,  marginBottom: 3 }}>
    <Image
      source={{ uri: 'https://cdn4.iconfinder.com/data/icons/gambling-15/48/24-512.png' }}
      style={{ height: 30, width: 30, marginLeft: 30, marginTop:20 }}
    />
      <Text style={{  fontSize:18, marginLeft: 18, marginTop:28,  }}> Bantuan </Text>
    </View>
  );

}

const Syarat = () => {
  
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', position: 'relative', top: 10,paddingBottom:20,  marginBottom: 10 }}>
    <Image
      source={{ uri: 'https://cdn4.iconfinder.com/data/icons/gambling-15/48/24-512.png' }}
      style={{ height: 30, width: 30, marginLeft: 30, marginTop:20 }}
    />
      <Text style={{  fontSize:18, marginLeft: 18, marginTop:28,  }}> Syarat & Ketentuan </Text>
    </View>
  );

}

const Keluar = () => {
  
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', position: 'relative', top: 10,paddingBottom:20,  marginBottom: 3 }}>
    <Image
      source={{ uri: 'https://cdn4.iconfinder.com/data/icons/gambling-15/48/24-512.png' }}
      style={{ height: 30, width: 30, marginLeft: 30, marginTop:20 }}
    />
      <Text style={{  fontSize:18, marginLeft: 18, marginTop:28,  }}> Keluar </Text>
    </View>
  );

}

export default App;

