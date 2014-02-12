\#include "${out_file}.hpp"
#for header in $headers
\#include "${os.path.basename(header)}"
#end for
\#include "tolua_fix.h"
\#include "LuaBasicConversions.h"


