(function(){
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const options=(arr,val)=>arr.map(x=>'<option value="'+esc(x)+'" '+(x===val?'selected':'')+'>'+esc(x||'Selecione')+'</option>').join('');
 function select(id,label,values,val,required=true){return '<div class="field"><label for="'+id+'">'+esc(label)+(required?' <span class="required">*</span>':'')+'</label><select id="'+id+'" '+(required?'required':'')+'>'+options(['',...values],val)+'</select></div>'}
 function field(id,label,val,placeholder='',type='text',required=false){return '<div class="field"><label for="'+id+'">'+esc(label)+(required?' <span class="required">*</span>':'')+'</label><input id="'+id+'" type="'+type+'" value="'+esc(val||'')+'" placeholder="'+esc(placeholder)+'" '+(required?'required':'')+'></div>'}
 function textarea(id,label,val,placeholder='',required=false){return '<div class="field"><label for="'+id+'">'+esc(label)+(required?' <span class="required">*</span>':'')+'</label><textarea id="'+id+'" placeholder="'+esc(placeholder)+'" '+(required?'required':'')+'>'+esc(val||'')+'</textarea></div>'}
 function check(id,label,checked){return '<label class="check-option"><input id="'+id+'" type="checkbox" '+(checked?'checked':'')+'><span>'+esc(label)+'</span></label>'}
 function render(data,ctx){
  const ds=data.datasets.find(x=>x.id===ctx.datasetId)||data.missingDatasets.find(x=>x.id===ctx.datasetId)||null;
  const users=data.users.filter(u=>u.status==='Ativo');
  const chosen=ctx.request||{};
  const hypotheses=chosen.hypotheses||[];
  return '<div class="notice">Preencha as seções abaixo. Cada seção pode ser recolhida; os campos preenchidos permanecem ao navegar entre elas.</div>'+
   '<div class="request-summary"><div class="summary-box"><small>ÓRGÃO CEDENTE</small><strong>'+esc(ds?.org||chosen.cedente||'A confirmar')+'</strong></div></div>'+
   '<form id="request-form" novalidate>'+
   '<details class="form-section" open><summary>01 · Benefícios e políticas públicas <span>⌄</span></summary><div class="form-section-body">'+textarea('services','Serviços públicos impactados',chosen.services,'Descreva os serviços públicos impactados',true)+textarea('benefits','Benefícios esperados',chosen.benefits,'Descreva os benefícios esperados',true)+textarea('population','População beneficiada',chosen.population,'Descreva a população beneficiada')+select('policies','Políticas públicas impactadas',['Transformação digital','Saúde','Educação','Assistência social','Segurança pública','Outra'],chosen.policies,true)+'</div></details>'+
   '<details class="form-section" open><summary>02 · Características operacionais <span>⌄</span></summary><div class="form-section-body">'+select('access','Forma de acesso',['API','Arquivo'],chosen.access,true)+'<div id="access-fields">'+((chosen.access==='API'||chosen.access==='Arquivo')?'<div class="form-grid">'+field('volume','Volumetria Anual solicitada',chosen.volume,'Informe a volumetria anual', 'text',true)+textarea('technical','Observação Técnica',chosen.technical,'Informações técnicas adicionais')+'</div>':'<div class="notice">Selecione API ou Arquivo para informar a volumetria anual e a observação técnica.</div>')+'</div></div></details>'+
   '<details class="form-section" open><summary>03 · Conformidade e tratamento de dados <span>⌄</span></summary><div class="form-section-body"><div class="field"><label>Os dados solicitados contêm dados pessoais? <span class="required">*</span></label><div class="radio-choice-group"><label class="radio-choice"><input type="radio" name="lgpd" value="sim" '+(chosen.lgpd==='sim'?'checked':'')+'> Sim</label><label class="radio-choice"><input type="radio" name="lgpd" value="nao" '+(chosen.lgpd==='nao'?'checked':'')+'> Não</label></div></div><div id="lgpd-fields">'+(chosen.lgpd==='sim'?select('purpose','Finalidade do tratamento',['Execução de política pública','Prestação de serviços públicos','Cumprimento de obrigação legal ou regulatória pelo controlador','Outro'],chosen.purpose,true)+ '<div class="field"><label>Hipótese de Tratamento <span class="required">*</span></label><div class="hypothesis-list">'+check('hyp-policy','Execução de Políticas Públicas',hypotheses.includes('Execução de Políticas Públicas'))+check('hyp-service','Prestação de Serviços Públicos',hypotheses.includes('Prestação de Serviços Públicos'))+check('hyp-obligation','Cumprimento de obrigação legal ou regulatória pelo controlador',hypotheses.includes('Cumprimento de obrigação legal ou regulatória pelo controlador'))+check('hyp-other','Outro, especificar',hypotheses.includes('Outro'))+'</div>'+field('hyp-other-text','Especifique outra hipótese',chosen.hypothesisOther,'Descreva a hipótese', 'text',false)+'</div>'</div>'+select('sensitive','Contém dados pessoais sensíveis?',['Não','Sim'],chosen.sensitive,true)+textarea('security','Medidas de segurança',chosen.security,'Descreva controles e salvaguardas',true):'<div class="notice">Se os dados não contêm dados pessoais, os campos complementares de tratamento não são exigidos.</div>')+'</div></div></details>'+
   '<details class="form-section" open><summary>04 · Responsáveis e assinatura <span>⌄</span></summary><div class="form-section-body"><div class="form-grid">'+select('dirTi','Dirigente de TI',users.map(u=>u.name),chosen.dirTi,true)+select('respTech','Responsável Técnico',users.map(u=>u.name),chosen.respTech,true)+'</div><div id="signer-summaries" class="form-grid"></div><label class="check-option"><input id="accept" type="checkbox" '+(chosen.accept?'checked':'')+'><span>Declaro que revisei as informações e estou de acordo com o envio da solicitação.</span></label></div></details>'+
   '</form>';
 }
 function read(){
  const get=id=>document.getElementById(id);
  const val=id=>get(id)?.value||'';
  const checked=id=>!!get(id)?.checked;
  return {services:val('services'),benefits:val('benefits'),population:val('population'),policies:val('policies'),access:val('access'),volume:val('volume'),technical:val('technical'),lgpd:document.querySelector('input[name="lgpd"]:checked')?.value||'',purpose:val('purpose'),hypotheses:[['hyp-policy','Execução de Políticas Públicas'],['hyp-service','Prestação de Serviços Públicos'],['hyp-obligation','Cumprimento de obrigação legal ou regulatória pelo controlador'],['hyp-other','Outro']].filter(([id])=>checked(id)).map(([,label])=>label),hypothesisOther:val('hyp-other-text'),sensitive:val('sensitive'),security:val('security'),dirTi:val('dirTi'),respTech:val('respTech'),accept:checked('accept')};
 }
 function validate(d){
  const errors=[];
  for(const [key,label] of [['services','Serviços públicos impactados'],['benefits','Benefícios esperados'],['policies','Políticas públicas impactadas'],['access','Forma de acesso'],['dirTi','Dirigente de TI'],['respTech','Responsável Técnico']])if(!d[key])errors.push(label);
  if(['API','Arquivo'].includes(d.access)&&!d.volume)errors.push('Volumetria Anual solicitada');
  if(!d.lgpd)errors.push('Informe se os dados contêm dados pessoais');
  if(d.lgpd==='sim'){
   if(!d.purpose)errors.push('Finalidade do tratamento');
   if(!d.hypotheses.length)errors.push('Selecione ao menos uma Hipótese de Tratamento');
   if(d.hypotheses.includes('Outro')&&!d.hypothesisOther.trim())errors.push('Especifique a opção Outro');
   if(!d.sensitive)errors.push('Informe se há dados sensíveis');
   if(!d.security)errors.push('Medidas de segurança');
  }
  if(d.dirTi&&d.dirTi===d.respTech)errors.push('Dirigente de TI e Responsável Técnico devem ser pessoas diferentes');
  if(!d.accept)errors.push('Marque o aceite da declaração');
  return errors;
 }
 window.RequestForm={render,read,validate};
})();