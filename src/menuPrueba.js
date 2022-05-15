return (
    <>
   <div className='d-flex'>
   <div id='sidebar-container'>
   <div className='menu text-light'>
   <br/>
   <br/>
   <br/>
   <br/>
   <Navigation
          // you can use your own router's api to get pathname
          activeItemId="/management/members"
          onSelect={({itemId}) => {
            // maybe push to the route
          }}
          items={[
            {
              title: 'Inicio',
              itemId: '/',
              // you can use your own custom Icon component as well
              // icon is optional
              elemBefore: () => <icon name="inbox" />,
            },
            {
              title: 'Carpeta 1',
              itemId: '/doc',
              elemBefore: () => <icon name="users" />,
              subNav: [
                {
                  title: 'documento.pdf',
                  itemId: '/management/projects',
                },
                {
                  title: 'documento2.pdf',
                  itemId: '/management/members',
                },
              ],
            },
            {
              title: 'Carpeta 2',
              itemId: '/another',
              subNav: [
                {
                  title: 'documento3.pdf',
                  itemId: '/management/teams',
                },
              ],
            },
          ]}
        />
   </div>
   </div>
   </div>
    </>
  );