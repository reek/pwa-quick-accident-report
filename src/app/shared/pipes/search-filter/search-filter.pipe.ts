import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(objectArray: Object[], term: string = ''): Object[] {
    if (Array.isArray(objectArray)) {
      return objectArray.filter(object => {
        const values = Object.values(object)
        return values.find(objectValue => {
          if (typeof objectValue === 'string') {
            const sanitizedValue = objectValue.toLowerCase()
            return sanitizedValue.indexOf(term.toLowerCase()) > -1
          } else {
            return false
          }
        })
      })
    } else {
      console.error('Given value must be an array!')
      return []
    }
  }

}
