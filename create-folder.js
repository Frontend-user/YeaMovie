import fs from "fs";
import path from "path";
const args = process.argv
const list = args[2].split('/')
const folderName = list[list.length-1]
if (!folderName) {
    console.error("❌ Укажите название папки! Например: npm run create-components-folder ui-test");
    process.exit(1);
}

const folderPath = path.join("src", "components",...list.slice(0,list.length-1), folderName);
const tsxFilePath = path.join(folderPath, `${folderName}.jsx`);
const scssFilePath = path.join(folderPath, `${folderName}.scss`);

function toPascalCase(str) {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

const componentName = toPascalCase(folderName);

const tsxTemplate = `import './${folderName}.scss'

const ${componentName} = () => {
    return ( 
        <div>
    
        </div>
    );
};

export default ${componentName};
`;

// Код для .scss файла
const scssTemplate = `.${folderName} {

}`;

// Создаём папку
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`✅ Папка создана: ${folderPath}`);
}

// Создаём .tsx файл
if (!fs.existsSync(tsxFilePath)) {
    fs.writeFileSync(tsxFilePath, tsxTemplate);
    console.log(`✅ Файл создан: ${tsxFilePath}`);
}

// Создаём .scss файл
if (!fs.existsSync(scssFilePath)) {
    fs.writeFileSync(scssFilePath, scssTemplate);
    console.log(`✅ Файл создан: ${scssFilePath}`);
}
