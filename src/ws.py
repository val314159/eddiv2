import bottle

@bottle.get('/')
@bottle.get('/<path:path>')
def _(path='index.html'):
    return open(path)

@bottle.post('/<path:path>')
def _(path='index.html'):
    txt = bottle.request.body.read()
    open(path,'w').write(txt)
    return 'OK'
