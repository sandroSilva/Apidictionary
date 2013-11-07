$("#btnDicionary").click(function() {
	
	if($("#searchWord").val() == "")
	    {
			$("#searchWord").val("write a word!");
	    }
	else
	    {
			var urlJsonDicionary = 'apidicionary.php?word='+$("#searchWord").val();
			$.ajax({
				type: 'GET',
				url: urlJsonDicionary,
				dataType: "xml",
				success: function(result){
		    		var repetelinhaDicionary;
					//cria o array para as respostas.
		   	 		var expressalinhaDicionary = [];

					$(result).find('entry').each(function () {
						//procura a etinologia da palavra.
						origem = $(this).find('etym').text();
						$(".tipeResponseDicionario").replaceWith('<div class="tipeResponseDicionario">'+origem.replace(/_/g , " ")+'</div>');
						//procura pela palavra digitada.
						$(".titleResponseDicionario").replaceWith('<div class="titleResponseDicionario">'+$(this).find('orth').text()+'</div>');
						//procura o significado da palavra e insere junto com o código em html.
						repetelinhaDicionary = '<div class="textResponseDicionario">'+$(this).find('sense').text()+'</div>'
					});
					//limpa a div antes de aplicar o resultado.
					$("#textoDicionario").empty();
					//passa o array para um string.
					imprimeDicionario = expressalinhaDicionary.toString();
					//substitui a vírgula por espaço
					insereResponse = repetelinhaDicionary.replace(/\./g,".&nbsp;");
					//substitui o underline por espaço
					$("#textoDicionario").append(insereResponse.replace(/_/g , " "));
				}
			});
	    }
});
