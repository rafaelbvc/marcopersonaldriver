import React, { useState, ChangeEvent, CSSProperties, FC } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";

// 1. Interface para os dados do formulário
interface ContractData {
  nome: string;
  cpf: string;
  servico: string;
  valor: string;
}

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: "Helvetica" },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  content: { marginBottom: 15, lineHeight: 1.6 },
  footer: {
    marginTop: 50,
    borderTopWidth: 1,
    paddingTop: 10,
    textAlign: "center",
  },
});

// 2. Tipagem das Props do Componente PDF
interface MyContractPDFProps {
  data: ContractData;
}

const MyContractPDF: FC<MyContractPDFProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>CONTRATO DE PRESTAÇÃO DE SERVIÇOS</Text>
      <Text style={styles.content}>
        Eu, {data.nome || "__________"}, portador do CPF{" "}
        {data.cpf || "__________"}, declaro para os devidos fins que aceito os
        termos do serviço de {data.servico || "__________"}.
      </Text>
      <Text style={styles.content}>
        Valor acordado: R$ {data.valor || "0,00"}.
      </Text>
      <View style={styles.footer}>
        <Text>Assinado digitalmente por {data.nome || "Cliente"}</Text>
      </View>
    </Page>
  </Document>
);

export default function ContractGenerator() {
  // 3. Estado tipado
  const [formData, setFormData] = useState<ContractData>({
    nome: "",
    cpf: "",
    servico: "",
    valor: "",
  });
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const servicosSugeridos: string[] = [
    "Aeroportos/Portos",
    "Consultas Médicas",
    "Shows",
    "Localidades/Serviços",
  ];

  // 4. Tipagem do evento de Change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setShowPreview(false);
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "500px",
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ marginTop: "12vh" }}>Gerador de Contrato</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          name="nome"
          placeholder="Nome Completo"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="cpf"
          placeholder="CPF"
          onChange={handleChange}
          style={inputStyle}
        />

        <div style={{ position: "relative", width: "100%" }}>
          <input
            name="servico"
            list="lista-servicos"
            placeholder="Selecione ou digite o serviço"
            onChange={handleChange}
            style={
              {
                ...inputStyle,
                width: "100%",
                boxSizing: "border-box",
              } as CSSProperties
            }
          />
          <div style={arrowStyle}></div>

          <datalist id="lista-servicos">
            {servicosSugeridos.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
        </div>

        <input
          name="valor"
          placeholder="Valor"
          onChange={handleChange}
          style={inputStyle}
        />

        <button onClick={() => setShowPreview(true)} style={buttonStyle}>
          Gerar Prévia do PDF
        </button>
      </div>

      {showPreview && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <p>O seu PDF está pronto!</p>
          <BlobProvider document={<MyContractPDF data={formData} />}>
            {({ url, loading }) => (
              <a
                href={url || "#"}
                target="_blank"
                rel="noreferrer"
                style={downloadLinkStyle}
              >
                {loading ? "Gerando..." : "Abrir PDF em nova aba"}
              </a>
            )}
          </BlobProvider>
        </div>
      )}
    </div>
  );
}

// Estilos tipados como CSSProperties
const inputStyle: CSSProperties = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const arrowStyle: CSSProperties = {
  position: "absolute",
  right: "15px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  width: "0",
  height: "0",
  borderLeft: "6px solid transparent",
  borderRight: "6px solid transparent",
  borderTop: "7px solid #888",
};

const buttonStyle: CSSProperties = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
};

const downloadLinkStyle: CSSProperties = {
  textDecoration: "none",
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px 20px",
  borderRadius: "4px",
  display: "inline-block",
};
