import fs from "fs"
import path from "path"
import ejs from "ejs"

const viewsDir = path.resolve("./views")
const outputDir = path.resolve("./templates")

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

fs.readdirSync(viewsDir).forEach(file => {
  if (file.endsWith(".ejs")) {
    const templateStr = fs.readFileSync(path.join(viewsDir, file), "utf-8")

    const compiledFn = ejs.compile(templateStr, {
        client: true,
        context: {},
        rmWhitespace: true
    }).toString()

    const moduleName = path.basename(file, ".ejs")
    const output = `export const ${moduleName} = ${compiledFn};\n`

    fs.writeFileSync(path.join(outputDir, `${moduleName}.js`), output)
    console.log(`Compiled ${file} → templates/${moduleName}.js`)
  }
})
