export function storyMap() {

    const laMap = {
        cuisine: {
            video: {
                url: 'testing',
                playerColor: 'purple'
            },
            css: {
                backgroundColor: 'pink',
                linkColor: 'orange'
            },
            choices: [
                {
                    text: 'aller dans le jardin',
                    lien: 'jardin'
                },
                {
                    text: 'aller dans la rue',
                    lien: 'larue'
                }
            ]
        },
        salledebain: {
            video: {
                url: 'blackguy',
                playerColor: 'purple'
            },
            css: {
                backgroundColor: 'blue',
                linkColor: 'purple'
            },
            choices: [
                {
                    text: 'aller aux toilettes',
                    lien: 'toilettes'
                },
                {
                    text: 'se laver les mains',
                    lien: 'laverlesmains'
                },
                {
                    text: 'se laver les mains mamen',
                    lien: 'laverlesmainsmamen'
                }
            ]
        }

    }

    return laMap;
  
  }
  
  export default storyMap;
  



