$(function(){
  var visuals = new Visuals('graph')
    , $repoTitle = $('#repo-title')
    , $repoDescription = $('#repo-description')
    , $graphs = $('#graphs')

  fetch('./data.json').then((r) => r.json()).then((data) => {
    $repoTitle.text(data.name || '')
    $repoDescription.text(data.description || '')
    $graphs.show()
    visuals.showData(data)
  })
})
