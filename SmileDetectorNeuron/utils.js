module.exports = class Utils {
  constructor() {
    this.width = 62
    this.height = 25
  }

  toNumber(character) {
    return character === "$" ? 1 : 0
  }

  toArray(str) {
    const size = this.width * this.height
    if (str.length !== size) {
      throw new Error("String in wrong size")
    }
    return str.slice(size / 2, size).split('').map(this.toNumber)
  }

  get trainingData() {
    return [
      {
        input: this.toArray(
          '________________________$$$$$$$$$$$$$$________________________' +
          '____________________$$$$______________$$$$$___________________' +
          '_______________$$$$$_______________________$$$$$______________' +
          '___________$$$$_________________________________$$$___________' +
          '_________$$$______$$$$__________________$$$$______$$$_________' +
          '_______$$$_______$$$$$$________________$$$$$$_______$$$_______' +
          '_____$$$________$$$$$$$$______________$$$$$$$$________$$$_____' +
          '____$$$________$$$$$$$$$$____________$$$$$$$$$$_________$$$___' +
          '___$$$_________$$$$$$$$$$____________$$$$$$$$$$__________$$$__' +
          '__$$$__________$$$$$$$$$$____________$$$$$$$$$$___________$$$_' +
          '_$$$___________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
          '$$$____________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
          '$$$_____________$$$$$$$$______________$$$$$$$$_____________$$$' +
          '$$$______________$$$$$$________________$$$$$$______________$$$' +
          '$$$________________$$____________________$$________________$$$' +
          '_$$$_____$$$$____________________________________$$$$_____$$$_' +
          '__$$$__$$_$$______________________________________$$_$$__$$$__' +
          '___$$$_____$$____________________________________$$_____$$$___' +
          '____$$$_____$$$_________________________________$$_____$$$____' +
          '_____$$$_____$$$_____________________________$$$______$$$_____' +
          '_______$$$_____$$$$$$___________________$$$$$$$______$$$______' +
          '_________$$$$______$$$$$$$$$_____$$$$$$$$$$$______$$$$________' +
          '____________$$$$_______$$$$$$$$$$$$$$$$$_______$$$$___________' +
          '________________$$$$$_____________________$$$$$_______________' +
          '____________________$$$$$$$$$$$$$$$$$$$$$$$___________________'
        ),
        output: { smile: 1 }
      },
      {
        input: this.toArray(
          '________________________$$$$$$$$$$$$$$________________________' +
          '____________________$$$$______________$$$$$___________________' +
          '_______________$$$$$_______________________$$$$$______________' +
          '___________$$$$_________________________________$$$___________' +
          '_________$$$______$$$$__________________$$$$______$$$_________' +
          '_______$$$_______$$$$$$________________$$$$$$_______$$$_______' +
          '_____$$$________$$$$$$$$______________$$$$$$$$________$$$_____' +
          '____$$$________$$$$$$$$$$____________$$$$$$$$$$_________$$$___' +
          '___$$$_________$$$$$$$$$$____________$$$$$$$$$$__________$$$__' +
          '__$$$__________$$$$$$$$$$____________$$$$$$$$$$___________$$$_' +
          '_$$$___________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
          '$$$____________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
          '$$$_____________$$$$$$$$______________$$$$$$$$_____________$$$' +
          '$$$______________$$$$$$________________$$$$$$______________$$$' +
          '$$$________________$$____________________$$________________$$$' +
          '_$$$______________________________________________________$$$_' +
          '__$$$__________________$$$$$$$$$$$$$$$$$_________________$$$__' +
          '___$$$_____________$$$$$$_____________$$$$$$____________$$$___' +
          '____$$$__________$$$_______________________$$$_________$$$____' +
          '_____$$$_______$$_____________________________$$______$$$_____' +
          '_______$$$___________________________________________$$$______' +
          '_________$$$$_____________________________________$$$$________' +
          '____________$$$$_______________________________$$$$___________' +
          '________________$$$$$_____________________$$$$$_______________' +
          '____________________$$$$$$$$$$$$$$$$$$$$$$$___________________'
        ),
        output: { sad: 1 }
      }
    ]
  }

  get testCases() {
    return [
      this.toArray(
        '________________________$$$$$$$$$$$$$$________________________' +
        '____________________$$$$______________$$$$$___________________' +
        '_______________$$$$$_______________________$$$$$______________' +
        '___________$$$$_________________________________$$$___________' +
        '_________$$$______$$$$__________________$$$$______$$$_________' +
        '_______$$$_______$$$$$$________________$$$$$$_______$$$_______' +
        '_____$$$________$$$$$$$$______________$$$$$$$$________$$$_____' +
        '____$$$________$$$$$$$$$$____________$$$$$$$$$$_________$$$___' +
        '___$$$_________$$$$$$$$$$____________$$$$$$$$$$__________$$$__' +
        '__$$$__________$$$$$$$$$$____________$$$$$$$$$$___________$$$_' +
        '_$$$___________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
        '$$$____________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
        '$$$_____________$$$$$$$$______________$$$$$$$$_____________$$$' +
        '$$$______________$$$$$$________________$$$$$$______________$$$' +
        '$$$________________$$____________________$$________________$$$' +
        '_$$$______________________________________________________$$$_' +
        '__$$$__________________$$$$$$$$$$$$$$$$$_________________$$$__' +
        '___$$$_____________$$$$$$_____________$$$$$$____________$$$___' +
        '____$$$__________$$$_______________________$$$_________$$$____' +
        '_____$$$_______$$_____________________________$$______$$$_____' +
        '_______$$$___________________________________________$$$______' +
        '_________$$$$_____________________________________$$$$________' +
        '____________$$$$_______________________________$$$$___________' +
        '________________$$$$$_____________________$$$$$_______________' +
        '____________________$$$$$$$$$$$$$$$$$$$$$$$___________________'
      ),
      this.toArray(
        '________________________$$$$$$$$$$$$$$________________________' +
        '____________________$$$$______________$$$$$___________________' +
        '_______________$$$$$_______________________$$$$$______________' +
        '___________$$$$_________________________________$$$___________' +
        '_________$$$______$$$$__________________$$$$______$$$_________' +
        '_______$$$_______$$$$$$________________$$$$$$_______$$$_______' +
        '_____$$$________$$$$$$$$______________$$$$$$$$________$$$_____' +
        '____$$$________$$$$$$$$$$____________$$$$$$$$$$_________$$$___' +
        '___$$$_________$$$$$$$$$$____________$$$$$$$$$$__________$$$__' +
        '__$$$__________$$$$___$$$____________$$$$___$$$___________$$$_' +
        '_$$$___________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
        '$$$____________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
        '$$$_____________$$$$$$$$______________$$$$$$$$_____________$$$' +
        '$$$______________$$$$$$________________$$$$$$______________$$$' +
        '$$$________________$$____________________$$________________$$$' +
        '_$$$______________________________________________________$$$_' +
        '__$$$__________________$$$$$$$$$$$$$$$$$_________________$$$__' +
        '___$$$_______________$$________________$$_______________$$$___' +
        '____$$$____________$$____________________$$____________$$$____' +
        '_____$$$______________________________________________$$$_____' +
        '_______$$$___________________________________________$$$______' +
        '_________$$$$_____________________________________$$$$________' +
        '____________$$$$_______________________________$$$$___________' +
        '________________$$$$$_____________________$$$$$_______________' +
        '____________________$$$$$$$$$$$$$$$$$$$$$$$___________________'
      ),
      this.toArray(
        '________________________$$$$$$$$$$$$$$________________________' +
        '____________________$$$$______________$$$$$___________________' +
        '_______________$$$$$_______________________$$$$$______________' +
        '___________$$$$_________________________________$$$___________' +
        '_________$$$______$$$$__________________$$$$______$$$_________' +
        '_______$$$_______$$$$$$________________$$$$$$_______$$$_______' +
        '_____$$$________$$$$$$$$______________$$$$$$$$________$$$_____' +
        '____$$$________$$$$$$$$$$____________$$$$$$$$$$_________$$$___' +
        '___$$$_________$$$$$$$$$$____________$$$$$$$$$$__________$$$__' +
        '__$$$__________$$$$$$$$$$____________$$$$$$$$$$___________$$$_' +
        '_$$$___________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
        '$$$____________$$$$$$$$$$____________$$$$$$$$$$____________$$$' +
        '$$$_____________$$$$$$$$______________$$$$$$$$_____________$$$' +
        '$$$______________$$$$$$________________$$$$$$______________$$$' +
        '$$$________________$$____________________$$________________$$$' +
        '_$$$_____$$$$____________________________________$$$$_____$$$_' +
        '__$$$__$$_$$______________________________________$$_$$__$$$__' +
        '___$$$_____$$____________________________________$$_____$$$___' +
        '____$$$_____$$$_________________________________$$_____$$$____' +
        '_____$$$_____$$$_____________________________$$$______$$$_____' +
        '_______$$$_____$$$$$$___________________$$$$$$$______$$$______' +
        '_________$$$$______$$$$$$$$$_____$$$$$$$$$$$______$$$$________' +
        '____________$$$$_______$$$$$$$$$$$$$$$$$_______$$$$___________' +
        '________________$$$$$_____________________$$$$$_______________' +
        '____________________$$$$$$$$$$$$$$$$$$$$$$$___________________'
      )
    ]
  }
}