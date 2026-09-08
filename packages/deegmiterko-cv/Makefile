VARIANTS := plain frontend agentic frontend-agentic dev-ops scraping ecommerce platform-improve game-design-numerical
OUT := 2026
NAME := Dominik Gmiterko

all: $(VARIANTS)

$(VARIANTS):
	mkdir -p "$(OUT)/$@"
	pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$(OUT)/$@" -jobname="$(NAME)" "\def\variant{$@}\input{main.tex}"
	pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$(OUT)/$@" -jobname="$(NAME)" "\def\variant{$@}\input{main.tex}"

.PHONY: all $(VARIANTS)
