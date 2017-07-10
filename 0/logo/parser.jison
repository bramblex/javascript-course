%lex

%s INITIAL INCOMMENT

/** identifiers **/
identifier                              ("_"|{letter})({letter}|{digit}|"_")*
letter                                  {lowercase}|{uppercase}
lowercase                               [a-z]
uppercase                               [A-Z]
digit                                   [0-9]

/** numbers **/
integer                                 {decinteger}|{hexinteger}|{octinteger}
decinteger                              ([0-9]{digit}*)
hexinteger                              "0"[x|X]{hexdigit}+
octinteger                              "0"[o|O]?{octdigit}+
bininteger                              "0"[b|B]({bindigit}+)
hexdigit                                {digit}|[a-fA-F]
octdigit                                [0-7]
bindigit                                [0|1]

/** floats **/
floatnumber                             {exponentfloat}|{pointfloat}
exponentfloat                           ({digit}+|{pointfloat}){exponent}
pointfloat                              ({digit}*{fraction})|({digit}+".")
fraction                                "."{digit}+
exponent                                [e|E][\+|\-]{digit}+

/** reserved **/
reserved                                {keywords}|{symbols}

keywords                                "令"|"对于"|"从"|"到"|"如果"|"则"|
                                        "否则"|"什么都不干"|"开始画画"|"结束画画"|
                                        "顺时针旋转"|"度"|"逆时针旋转"|"向前移动"|"像素"|
                                        "且"|"或"

symbols                                 "="|"/="|"+"|"-"|"*"|"/"|"%"|"<="|">="|">"|"<"|
                                        ","|"，"|"。"|"."|
                                        "("|")"

/** whitespaces **/
whitespaces                             ([\ \t\f\n])+

%%
<<EOF>>                                 return 'EOF'
{whitespaces}                           /** skip **/
{reserved}                              %{ 
                                            if (yytext === ',') {
                                              return '，'
                                            } else if (yytext === '.') {
                                              return '。'
                                            } else {
                                              return yytext 
                                            }
                                        %}
{floatnumber}                           return 'NUM'
{bininteger}                            %{  
                                            // parseInt to convert to base-10
                                            var i = yytext.substr(2); // binary val
                                            yytext = parseInt(i,2).toString();
                                            return 'NUMBER'
                                        %}
{integer}                               return 'NUM'
{identifier}                            return 'VAL'

/lex

%start source

%left '或' '且'
%left '=' '/=' 
%left '>' '<' '>=' '<=' 
%left '+' '-' 
%left '*' '/' '%'

%%

source
  : program EOF                                          { return $1 }
  | EOF                                                  { return '' }
  ;

program 
  : statement '。'                                       { $$ = $1 + ';' }
  | program statement '。'                               { $$ = $1 + '\n' + $2 + ';' }
  ;

statement
  : '令' VAL '=' expr                                    { $$ = `let ${$2} = ${$4}` }
  | '对于' VAL '从' expr '到' expr '，' statement        { $$ = `for(let ${$2}=${$4}; ${$2}<=${$6}; ${$2}++){ ${$8} }` }
  | '如果' boolexpr '则' statement '，' '否则' statement { $$ = `if(${$2}){ ${$4} }else{ ${$7} }` }
  | '什么都不干'                                         { $$ = `void(0)` }
  | '开始画画'                                           { $$ = `drawStart()` }
  | '结束画画'                                           { $$ = `drawEnd()` }
  | move                                                 { $$ = $1 }
  ;

move
  : '逆时针旋转' expr '度'                               { $$ = `clockwiseRotation(${$2})` }
  | '顺时针旋转' expr '度'                               { $$ = `anticlockwiseTotation(${$2})` }
  | '向前移动' expr '像素'                               { $$ = `goAhead(${$2})` }
  ;

expr
  : VAL                                                  { $$ = $1 }
  | NUM                                                  { $$ = $1 }
  | expr '+' expr                                        { $$ = `(${$1}+${$3})`}
  | expr '-' expr                                        { $$ = `(${$1}-${$3})`}
  | expr '*' expr                                        { $$ = `(${$1}*${$3})`}
  | expr '/' expr                                        { $$ = `(${$1}/${$3})`}
  | expr '%' expr                                        { $$ = `(${$1}%${$3})`}
  | '(' expr ')'                                         { $$ = `(${$2})`}
  ;

boolexpr
  : expr '=' expr                                        { $$ = `(${$1}===${$3})`}
  | expr '>' expr                                        { $$ = `(${$1}>${$3})`}
  | expr '<' expr                                        { $$ = `(${$1}<${$3})`}
  | expr '>=' expr                                       { $$ = `(${$1}>=${$3})`}
  | expr '<=' expr                                       { $$ = `(${$1}<=${$3})`}
  | boolexpr '或' boolexpr                               { $$ = `(${$1}||${$3})`}
  | boolexpr '且' boolexpr                               { $$ = `(${$1}&&${$3})`}
  | '(' boolexpr ')'                                     { $$ = `(${$2})`}
  ;