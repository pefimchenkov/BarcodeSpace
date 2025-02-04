export default function (path: string){
    const assets = import.meta.glob('~/assets/**/*', {
      eager: true,
      import: 'default'
    })
    //console.log('assets', assets)

    return assets['/assets/' + path]
  }